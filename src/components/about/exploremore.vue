<template>
    <div>
        <div>
            <h1 class="text-white text-center text-5xl pt-28">
                Explore us more?
            </h1>
            <div class="container px-5 mt-10 mx-auto max-w-7x1">
                <div class="flex flex-wrap -m-4">
                    <div class="xl:w-1/2 md:w-1/2 p-4">
                        <div class="p-6 rounded-lg">
                            <div class="flex justify-end items-end">
                                <router-link to="/News">
                                    <button
                                        class="focus:outline-none bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-white px-4 sm:px-10 py-2 sm:py-4 text-sm"
                                    >
                                        Our news and articles
                                    </button></router-link
                                >
                            </div>
                        </div>
                    </div>
                    <div class="xl:w-1/3 md:w-1/2 p-4">
                        <div class="p-6 rounded-lg justify-center items-center">
                            <router-link to="/contact">
                                <button
                                    class="ml-4 focus:outline-none bg-white transition duration-150 ease-in-out hover:border-indigo-600 hover:text-indigo-600 rounded border border-indigo-700 text-indigo-700 px-4 sm:px-10 py-2 sm:py-4 text-sm"
                                >
                                    Contact us
                                </button>
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Exploremore',
}
</script>

<style></style>
