import type { APIRoute } from 'astro'

export const POST: APIRoute = async ({ request }) => {
  const data = await request.formData()

  const name = data.get('name')
  const email = data.get('email')
  const phone = data.get('phone')
  const message = data.get('message')

  const isValidName =
    name &&
    name.toString().trim().replaceAll(' ', '').length > 0 &&
    `${name}`.match(/^[a-zA-ZñÑáéíóúÁÉÍÓÚñÑ\s]+$/)

  const isValidEmail =
    email &&
    `${email}`.match(
      /^[a-zA-ZñÑáéíóúÁÉÍÓÚñÑ\s]+@[a-zA-ZñÑáéíóúÁÉÍÓÚñÑ\s]+\.[a-zA-ZñÑáéíóúÁÉÍÓÚñÑ\s]+$/
    )
  const isValidPhone =
    phone && `${phone}`.match(/^(\+?56)?(\s?)(0?9)(\s?)[98765432]\d{7}$/)

  const isValidMessage =
    message && `${message}`.trim().replaceAll(' ', '').length > 0

  if (!isValidName || !isValidEmail || !isValidMessage || !isValidPhone) {
    return new Response(
      JSON.stringify({
        success: false,
        message: null,
        formErrors: {
          name: isValidName ? '' : 'Formato de nombre no válido',
          email: isValidEmail ? '' : 'Formato de correo no válido',
          phone: isValidPhone
            ? ''
            : 'Formato de teléfono no válido. Intenta con el formato +5698765432 o 98765432',
          message: isValidMessage ? '' : 'El mensaje no puede estar vacío',
        },
      }),
      { status: 400 }
    )
  }

  try {
    const apiRouteKey = import.meta.env.APPS_SCRIPT_KEY
    const apiRoute = `https://script.google.com/macros/s/${apiRouteKey}/exec`

    const emailResponse = await fetch(apiRoute, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        message,
      }),
    })

    if (!emailResponse.ok)
      throw new Error('Error al enviar el correo, intenta de nuevo.')

    const { success } = await emailResponse.json()

    if (!success)
      throw new Error('Error al enviar el correo, intenta de nuevo.')

    return new Response(
      JSON.stringify({
        success: true,
        message: `Muchas gracias ${name}, estaremos en contacto contigo en breve.`,
      }),
      { status: 200 }
    )
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : error
    return new Response(
      JSON.stringify({
        success: false,
        message: errorMessage,
      }),
      { status: 500 }
    )
  }
}
