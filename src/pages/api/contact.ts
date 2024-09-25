import type { APIRoute } from 'astro'

export const POST: APIRoute = async ({ request }) => {
  const data = await request.formData()

  const name = data.get('name')
  const email = data.get('email')
  const phone = data.get('phone')
  const message = data.get('message')

  const isValidPhone =
    phone && `${phone}`.match(/^(\+?56)?(\s?)(0?9)(\s?)[98765432]\d{7}$/)

  if (!name || !email || !message || !isValidPhone) {
    return new Response(
      JSON.stringify({
        success: false,
        message: 'Faltan datos obligatorios',
        errors: {
          name: name ? '' : 'Nombre Requerido',
          email: email ? '' : 'Email Requerido',
          phone: isValidPhone
            ? ''
            : 'No debe contener espacios y puede o no contener el código +56',
          message: message ? '' : 'Mensaje Requerido',
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

    if (!emailResponse.ok) throw new Error('Error al enviar el correo')

    const { success } = await emailResponse.json()

    if (!success) throw new Error('Error al enviar el correo')

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
