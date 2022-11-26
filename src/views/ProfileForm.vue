<template>
    <!--
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
-->

    <body class="antialiased font-sans bg-gray-200 overflow-hidden">
        <div class="" style="">
            <div class="bg-gray-100">
                <div class="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
                    <form action="#" method="POST">
                        <div class="mt-10 sm:mt-0">
                            <div class="md:grid md:grid-cols-3 md:gap-6">
                                <div class="md:col-span-1">
                                    <div class="px-4 sm:px-0">
                                        <h3 class="text-lg font-medium leading-6 text-gray-900">Personal Information
                                        </h3>
                                        <p class="mt-1 text-sm text-gray-600">Por favor complete su información
                                            personal.</p>
                                    </div>
                                </div>
                                <div class="mt-5 md:col-span-2 md:mt-0">

                                    <div class="overflow-hidden shadow sm:rounded-md">
                                        <div class="bg-white px-4 py-5 sm:p-6">
                                            <div class="grid grid-cols-6 gap-6">
                                                <div class="col-span-6 sm:col-span-2">
                                                    <label for="first-name"
                                                        class="block text-sm font-medium text-gray-700">First
                                                        name</label>
                                                    <input type="text" v-model.lazy="userData.firstname" id="first-name"
                                                        autocomplete="given-name"
                                                        class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
                                                </div>

                                                <div class="col-span-6 sm:col-span-2">
                                                    <label for="last-name"
                                                        class="block text-sm font-medium text-gray-700">Last
                                                        name</label>
                                                    <input type="text" v-model.lazy="userData.lastname" id="last-name"
                                                        autocomplete="family-name"
                                                        class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
                                                </div>

                                                <div class="col-span-6 sm:col-span-2">
                                                    <label for="user"
                                                        class="block text-sm font-medium text-gray-700">Username</label>
                                                    <input type="text" v-model.lazy="userData.user" id="user"
                                                        autocomplete="family-name"
                                                        class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
                                                </div>

                                                <div class="col-span-6 sm:col-span-3">
                                                    <label for="email-address"
                                                        class="block text-sm font-medium text-gray-700">Email
                                                        address</label>
                                                    <input type="text" v-model.lazy="userData.password"
                                                        id="email-address" autocomplete="email"
                                                        class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
                                                </div>



                                                <div class="col-span-6 sm:col-span-3">
                                                    <label for="country"
                                                        class="block text-sm font-medium text-gray-700">Country</label>
                                                    <select id="country" v-model="userData.selectedCountry"
                                                        autocomplete="country-name"
                                                        class="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                                                        <option v-for="option in optionsCountry" :value="option.value">
                                                            {{ option.text }}
                                                        </option>
                                                    </select>
                                                </div>

                                                <div class="col-span-6 sm:col-span-4">
                                                    <label for="street-address"
                                                        class="block text-sm font-medium text-gray-700">Street
                                                        address</label>
                                                    <input type="text" v-model="userData.streetaddress"
                                                        id="street-address" autocomplete="street-address"
                                                        class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
                                                </div>

                                                <div class="col-span-6 sm:col-span-2">
                                                    <label for="age"
                                                        class="block text-sm font-medium text-gray-700">Edad</label>
                                                    <input type="number" v-model="userData.age" id="age"
                                                        autocomplete="age" min="18"
                                                        class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
                                                </div>


                                                <div class="col-span-6 sm:col-span-2 ">
                                                    <label for="city"
                                                        class="block text-sm font-medium text-gray-700">City</label>
                                                    <input type="text" v-model="userData.city" id="city"
                                                        autocomplete="address-level2"
                                                        class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
                                                </div>

                                                <div class="col-span-6 sm:col-span-2">
                                                    <label for="state"
                                                        class="block text-sm font-medium text-gray-700">State /
                                                        Province</label>
                                                    <input type="text" v-model="userData.state" id="state"
                                                        autocomplete="address-level1"
                                                        class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
                                                </div>

                                                <div class="col-span-6 sm:col-span-2">
                                                    <label for="postal-code"
                                                        class="block text-sm font-medium text-gray-700">ZIP / Postal
                                                        code</label>
                                                    <input type="text" v-model="userData.postalcode" id="postal-code"
                                                        autocomplete="postal-code"
                                                        class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="hidden sm:block" aria-hidden="true">
                            <div class="py-5">
                                <div class="border-t border-gray-200"></div>
                            </div>
                        </div>

                        <div>
                            <div class="md:grid md:grid-cols-3 md:gap-6">
                                <div class="md:col-span-1">
                                    <div class="px-4 sm:px-0">
                                        <h3 class="text-lg font-medium leading-6 text-gray-900">Profile</h3>
                                        <p class="mt-1 text-sm text-gray-600">Cuentanos sobre ti.</p>
                                    </div>
                                </div>
                                <div class="mt-5 md:col-span-2 md:mt-0">

                                    <div class="shadow sm:overflow-hidden sm:rounded-md">
                                        <div class="space-y-6 bg-white px-4 py-5 sm:p-6">

                                            <div>
                                                <label for="about" class="block text-sm font-medium text-gray-700">Añade
                                                    una descripción sobre ti</label>
                                                <div class="mt-1">
                                                    <textarea id="about" v-model="userData.about" rows="3"
                                                        class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                                        placeholder="A mi me gusta compartir..."></textarea>
                                                </div>
                                                <p class="mt-2 text-sm text-gray-500">Esta información es muy
                                                    importante.</p>
                                            </div>

                                            <div>
                                                <label class="block text-sm font-medium text-gray-700">Foto de
                                                    Perfil</label>
                                                <div
                                                    class="mt-1 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6">
                                                    <div class="space-y-1 text-center">
                                                        <svg class="mx-auto h-12 w-12 text-gray-400"
                                                            stroke="currentColor" fill="none" viewBox="0 0 48 48"
                                                            aria-hidden="true">
                                                            <path
                                                                d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                                                stroke-width="2" stroke-linecap="round"
                                                                stroke-linejoin="round"></path>
                                                        </svg>
                                                        <div class="flex text-sm text-gray-600">
                                                            <label for="file-upload"
                                                                class="relative cursor-pointer rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500">
                                                                <span>Upload a file</span>
                                                                <input id="file-upload" name="file-upload" type="file"
                                                                    @change="onFileChange" class="sr-only">
                                                            </label>
                                                            <p class="pl-1">or drag and drop</p>
                                                        </div>
                                                        <p class="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="bg-gray-50 px-4 py-3 text-right sm:px-6">
                                            <button type="submit"
                                                class="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Save</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>



                        <div class="hidden sm:block" aria-hidden="true">
                            <div class="py-5">
                                <div class="border-t border-gray-200"></div>
                            </div>
                        </div>

                        <div class="mt-10 sm:mt-0">
                            <div class="md:grid md:grid-cols-3 md:gap-6">
                                <div class="md:col-span-1">
                                    <div class="px-4 sm:px-0">
                                        <h3 class="text-lg font-medium leading-6 text-gray-900">Medios de Contacto</h3>
                                        <p class="mt-1 text-sm text-gray-600">Por favor, completa toda la información
                                            para
                                            lograr mejor alcance.</p>
                                    </div>
                                </div>
                                <div class="mt-5 md:col-span-2 md:mt-0">
                                    <div class="overflow-hidden shadow sm:rounded-md">
                                        <div class="bg-white px-4 py-5 sm:p-6">
                                            <div class="grid grid-cols-6 gap-6">
                                                <div class="col-span-6 sm:col-span-3">
                                                    <label for="telefono"
                                                        class="block text-sm font-medium text-gray-700">Ingrese número
                                                        de telefono</label>
                                                    <input type="text" name="telefono" id="telefono"
                                                        autocomplete="given-name"
                                                        class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
                                                </div>

                                                <div class="col-span-6 sm:col-span-3">
                                                    <label for="whatsapp"
                                                        class="block text-sm font-medium text-gray-700">WhatsApp</label>
                                                    <input type="text" name="whatsapp" id="whatsapp"
                                                        autocomplete="family-name"
                                                        class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
                                                </div>

                                                <div class="col-span-6 sm:col-span-6">
                                                    <h1>Redes Sociles (Enlaces a perfil)</h1>
                                                </div>

                                                <div class="col-span-6 sm:col-span-3">
                                                    <label for="facebook"
                                                        class="block text-sm font-medium text-gray-700">Facebook</label>
                                                    <input type="text" name="facebook" id="facebook"
                                                        autocomplete="family-name"
                                                        class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
                                                </div>

                                                <div class="col-span-6 sm:col-span-3">
                                                    <label for="instagram"
                                                        class="block text-sm font-medium text-gray-700">Instagram</label>
                                                    <input type="text" name="instagram" id="instagram"
                                                        autocomplete="email"
                                                        class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
                                                </div>



                                                <div class="col-span-6">
                                                    <label for="twitter"
                                                        class="block text-sm font-medium text-gray-700">Twitter</label>
                                                    <input type="text" name="twitter" id="twitter"
                                                        autocomplete="twitter"
                                                        class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </body>
</template>

<script>

export default {
    data() {
        return {
            data: {
                image: ''
            },
            userData: {
                firstname: '',
                lastname: '',
                email: '',
                user: '',
                selectedCountry: '',
                streetaddress: '',
                age: '',
                state: '',
                postalcode: '',
                about: '',

            },
            optionsCountry: [
                { text: 'One', value: 'A' },
                { text: 'Two', value: 'B' },
                { text: 'Three', value: 'C' }
            ]

        }
    },
    methods: {
        onFileChange(e) {
            var files = e.target.files || e.dataTransfer.files;
            if (!files.length)
                return;
            this.createImage(files[0]);
        },
        createImage(file) {
            var image = new Image();
            var reader = new FileReader();
            var vm = this;

            reader.onload = (e) => {
                vm.image = e.target.result;
            };
            reader.readAsDataURL(file);
        },
        removeImage: function (e) {
            this.image = '';
        }
    }
}

</script>