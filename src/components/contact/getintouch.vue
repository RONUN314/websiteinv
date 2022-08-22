<template>
    <div>
        <div class="pt-12 pb-16 text-center">
            <h1 class="text-white text-5xl">Contact us</h1>
            <h2 class="text-white text-xl">We're here to help</h2>
        </div>

        <div>   
            <div class="grid grid-cols-12 gap-12">
                <div></div>
                <div></div>
                <div
                    class="col-span-4 block pb-64 pl-16 pr-16 pt-16 max-w-sm bg-teal-700 rounded-lg shadow-md"
                >
                    <h1 class="text-white text-3xl pb-5">
                        Contact information
                    </h1>
                    <h1 class="text-white text-xl">
                        Contact information description
                    </h1>
                    
                    <h1 class="text-white text-xl pt-5">Tel: +856 20 55555555</h1>
                    <h1 class="text-white text-xl pt-5">Email: test@gmail.com</h1>
                </div>
                

                <div class="col-span-4">
                    <!-- component -->
                    <form class="w-full max-w-lg">
                        <div class="flex flex-wrap -mx-3 mb-6">
                            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                <label
                                    class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                    for="grid-first-name"
                                >
                                    First Name
                                </label>
                                <input
                                    class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                    id="grid-first-name"
                                    type="text"
                                />
                                <p class="text-red-500 text-xs italic">
                                    Please fill out this field.
                                </p>
                            </div>
                            <div class="w-full md:w-1/2 px-3">
                                <label
                                    class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                    for="grid-last-name"
                                >
                                    Last Name
                                </label>
                                <input
                                    class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                    id="grid-last-name"
                                    type="text"
                                />
                            </div>
                        </div>
                        <div class="flex flex-wrap -mx-3 mb-6">
                            <div class="w-full px-3">
                                <label
                                    class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                    for="grid-password"
                                >
                                    E-mail
                                </label>
                                <input
                                    class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                    id="email"
                                    type="email"
                                />
                            </div>
                        </div>
                        <div class="flex flex-wrap -mx-3 mb-6">
                            <div class="w-full px-3">
                                <label
                                    class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                    for="grid-password"
                                >
                                    Message
                                </label>
                                <textarea
                                    class="no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none"
                                    id="message"
                                ></textarea>
                            </div>
                        </div>
                        <div class="md:flex md:items-center">
                            <div class="md:w-1/3">
                                <button
                                    class="shadow bg-teal-400 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                                    type="button"
                                >
                                    Send
                                </button>
                            </div>
                            <div class="md:w-2/3"></div>
                        </div>
                    </form>
                </div>

                <div></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Getintouch',
}
</script>

<style></style>
