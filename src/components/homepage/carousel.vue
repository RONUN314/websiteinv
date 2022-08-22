<template>
    <div class="mb-40">
        <div
            class="container mx-auto flex flex-col items-center py-12 sm:py-24"
        >
            <div class="w-11/12 sm:w-2/3 mb-5 sm:mb-10">
                <h1
                    class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center text-white font-extrabold leading-tight"
                >
                    The lao first
                    <span class="text-indigo-700">Online</span>
                    Exchange securities
                </h1>
                <p
                    class="mt-5 sm:mt-10 text-gray-600 font-normal text-center text-lg sm:text-lg"
                >
                    A professional website drives sales. Create a beautiful
                    website to impress and engage new customers – and establish
                    your business online.
                </p>
            </div>
            <div class="flex justify-center items-center">
                <button
                    class="focus:outline-none bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-white px-4 sm:px-10 py-2 sm:py-4 text-sm"
                >
                    Get Started
                </button>
                <router-link to="/about">
                    <button
                        class="ml-4 focus:outline-none bg-white transition duration-150 ease-in-out hover:border-indigo-600 hover:text-indigo-600 rounded border border-indigo-700 text-indigo-700 px-4 sm:px-10 py-2 sm:py-4 text-sm"
                    >
                        About us
                    </button>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Maincarousel',
}
</script>
