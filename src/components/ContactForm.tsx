import { useState, type FormEvent } from 'react'

interface FormErrors {
  name: string
  email: string
  phone: string
  message: string
}

interface ResponseData {
  success: boolean
  formErrors?: FormErrors
  message: string | null
}

const initalErrors: FormErrors = {
  name: '',
  email: '',
  phone: '',
  message: '',
}

export const ContactForm = () => {
  const [validationErrors, setValidationErrors] = useState(initalErrors)
  const [sendEmail, setSendEmail] = useState({
    isLoading: false,
    success: false,
    message: '',
  })

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    setSendEmail({
      isLoading: true,
      success: false,
      message: '',
    })

    const formData = new FormData(e.currentTarget)

    const response = await fetch('/api/contact', {
      method: 'POST',
      body: formData,
    })

    const data: ResponseData = await response.json()

    // get validation errors from server
    if (data.formErrors) {
      setValidationErrors(data.formErrors)
    } else {
      setValidationErrors(initalErrors)
    }

    setSendEmail({
      isLoading: false,
      success: data.success,
      message: data.message,
    })
  }

  return (
    <>
      {sendEmail.success ? (
        <p className='text-blue-800 py-10 max-w-md mx-auto text-center font-bold text-xl'>
          {sendEmail.message}
        </p>
      ) : (
        <form onSubmit={handleSubmit} className='relative space-y-6'>
          <label
            htmlFor='name'
            className='block space-y-2 text-sm font-medium text-blue-700'
          >
            Nombre Completo
            <input
              type='text'
              id='name'
              name='name'
              required
              className='block w-full border-b-2 border-blue-300 focus:border-blue-500 focus:ring-0 bg-transparent py-2 px-3 text-blue-900 placeholder-blue-400'
              placeholder='Tu nombre'
            />
            {validationErrors.name && (
              <p className='text-red-500'>{validationErrors.name}</p>
            )}
          </label>

          <div className='grid grid-cols-2 gap-4'>
            <label
              htmlFor='email'
              className='block space-y-2 text-sm font-medium text-blue-700'
            >
              Email de Contacto
              <input
                type='email'
                id='email'
                name='email'
                required
                className='block w-full border-b-2 border-blue-300 focus:border-blue-500 focus:ring-0 bg-transparent py-2 px-3 text-blue-900 placeholder-blue-400'
                placeholder='nombre@email.com'
              />
              {validationErrors.email && (
                <p className='text-red-500'>{validationErrors.email}</p>
              )}
            </label>

            <label
              htmlFor='phone'
              className='block space-y-2 text-sm font-medium text-blue-700'
            >
              Número de teléfono
              <input
                type='tel'
                id='phone'
                name='phone'
                required
                className='block w-full border-b-2 border-blue-300 focus:border-blue-500 focus:ring-0 bg-transparent py-2 px-3 text-blue-900 placeholder-blue-400'
                placeholder='+569xxxxxxxx'
              />
              {validationErrors.phone && (
                <p className='text-red-500'>{validationErrors.phone}</p>
              )}
            </label>
          </div>

          <label
            htmlFor='message'
            className='block space-y-2 text-sm font-medium text-blue-700'
          >
            Mensaje
            <textarea
              id='message'
              name='message'
              rows={4}
              required
              className='block w-full border-b-2 border-blue-300 focus:border-blue-500 focus:ring-0 bg-transparent py-2 px-3 text-blue-900 placeholder-blue-400'
              placeholder='¿Cómo podemos ayudarte?'
            ></textarea>
            {validationErrors.message && (
              <p className='text-red-500'>{validationErrors.message}</p>
            )}
          </label>
          {!sendEmail.success && sendEmail.message && (
            <p className='text-red-500 py-4'>{sendEmail.message}</p>
          )}
          <button
            type='submit'
            className='w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
            disabled={sendEmail.isLoading}
          >
            {sendEmail.isLoading ? 'Enviando...' : 'Enviar'}
          </button>
        </form>
      )}
    </>
  )
}
