<template>
  <div>
    <span>Shipping Address</span>
    <div class="grid md:grid-cols-2 md:gap-2">
      <input
        type="text"
        name="mail"
        class="border rounded h-10 w-full focus:outline-none focus:border-green-200 px-2 mt-2 text-sm"
        placeholder="First name*"
      />
      <input
        type="text"
        name="mail"
        class="border rounded h-10 w-full focus:outline-none focus:border-green-200 px-2 mt-2 text-sm"
        placeholder="Last name*"
      />
    </div>
    <input
      type="text"
      name="mail"
      class="border rounded h-10 w-full focus:outline-none focus:border-green-200 px-2 mt-2 text-sm"
      placeholder="Company (optional)"
    />
    <input
      type="text"
      name="mail"
      class="border rounded h-10 w-full focus:outline-none focus:border-green-200 px-2 mt-2 text-sm"
      placeholder="Address*"
    />
    <input
      type="text"
      name="mail"
      class="border rounded h-10 w-full focus:outline-none focus:border-green-200 px-2 mt-2 text-sm"
      placeholder="Apartment, suite, etc. (optional)"
    />
    <div class="grid md:grid-cols-3 md:gap-2">
      <input
        type="text"
        name="mail"
        class="border rounded h-10 w-full focus:outline-none focus:border-green-200 px-2 mt-2 text-sm"
        placeholder="Zipcode*"
      />
      <input
        type="text"
        name="mail"
        class="border rounded h-10 w-full focus:outline-none focus:border-green-200 px-2 mt-2 text-sm"
        placeholder="City*"
      />
      <input
        type="text"
        name="mail"
        class="border rounded h-10 w-full focus:outline-none focus:border-green-200 px-2 mt-2 text-sm"
        placeholder="State*"
      />
    </div>
    <input
      type="text"
      name="mail"
      class="border rounded h-10 w-full focus:outline-none focus:border-green-200 px-2 mt-2 text-sm"
      placeholder="Country*"
    />
    <input
      type="text"
      name="mail"
      class="border rounded h-10 w-full focus:outline-none focus:border-green-200 px-2 mt-2 text-sm"
      placeholder="Phone Number*"
    />
    <div class="flex justify-center items-center pt-2">
      <button
        type="button"
        class="h-12 w-48 rounded font-medium text-xs bg-indigo-500 text-white"
      >
        Continue to Payment
      </button>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped></style>
