import React from 'react'

const ContactBody = () => {
  return (
    <section class= "bg-red-600 p-10 h-fit">
      <div class="py-8 px-8 mx-auto max-w-screen-md bg-gray-200">

          <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900">Contact Bae!</h2>
          <p class="mb-8 lg:mb-16 font-light text-center text-gray-500 sm:text-xl">Want to write a heartwarming message to Hakos Baelz? Here's your chance!</p>

          <form action="#" class="space-y-8">
              
              <div>
                  <label for="email" class="block mb-2 text-sm font-medium text-gray-900">Your email</label>
                  <input type="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5" placeholder="example@gmail.com" required/>
              </div>

              <div>
                  <label for="subject" class="block mb-2 text-sm font-medium text-gray-900">Subject</label>
                  <input type="text" id="subject" class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 " placeholder="What's your message about?" required/>
              </div>

              <div class="sm:col-span-2">
                  <label for="message" class="block mb-2 text-sm font-medium text-gray-900">Your message</label>
                  <textarea id="message" rows="6" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500" placeholder="Please type your message here."></textarea>
              </div>

              <button type="submit" class="py-3 px-5 text-sm font-medium text-center ring-1 ring-offset-2 ring-inherit text-black rounded-lg bg-blue-400 sm:w-fit hover:opacity-90 focus:ring-4 focus:outline-none focus:ring-primary-300">Send message</button>
          
          </form>   

      </div>
    </section>
  )
}

export default ContactBody