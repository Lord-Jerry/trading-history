import React from 'react'

const Footer = () => {
    return (
        <div class="bg-white border-t mt-10">
          <div class="container mx-auto px-4">
            <div class="md:flex justify-between items-center text-sm">
              <div class="text-center md:text-left py-3 md:py-4 border-b md:border-b-0">
                <a href="/" class="no-underline text-grey-dark mr-4">Home</a>
                <a href="/" class="no-underline text-grey-dark mr-4">Careers</a>
                <a href="/" class="no-underline text-grey-dark">Legal &amp; Privacy</a>
              </div>
              <div class="md:flex md:flex-row-reverse items-center py-4">
                <div class="text-center mb-4 md:mb-0 md:flex">
                  <div>
                    <a href="/" class="inline-block leading-tight bg-blue-700 border border-blue-dark hover:bg-blue-dark px-3 py-2 text-white no-underline rounded">Need help?</a>
                  </div>
                </div>
                <div class="text-gray-700 text-center md:mr-4">&copy; 2020 Tradelog</div>
              </div>
            </div>
          </div>
        </div>
    
    )
}

export default Footer
