<template>
  <div class="flex flex-col h-screen">
    <!-- Header -->
    <header class="flex items-center px-4 border-b border-gray-300 md:px-6 lg:px-8 z-10">
      <div>
        <a class="flex items-center gap-2 font-semibold" href="#">
          <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="40" height="40" />
        </a>
      </div>
      <nav class="ml-auto space-x-4 flex items-center sm:space-x-6">
        <RouterLink to="/home"> Home </RouterLink>
        <RouterLink to="/features"> Features </RouterLink>
        <RouterLink to="/pricing"> Pricing </RouterLink>
        <RouterLink to="/contact"> Contact </RouterLink>
        <RouterLink to="/pokemon/2"> Pokemon </RouterLink>
        <RouterLink to="/auth"> SignIn </RouterLink>
      </nav>
    </header>
    <!-- Fin Header -->

    <!-- Main -->
    <main class="flex-1 flex w-full justify-center items-center">
      <RouterView></RouterView>
    </main>
    <!-- Fin Main -->

    <!-- Footer -->
    <footer class="flex items-center h-14 px-4 border-t border-gray-300 sm:h-16 md:px-6 lg:px-8">
      <p class="flex-1 text-sm text-gray-500 text-center">
        © {{ new Date().getFullYear() }} Acme Corporation. Derechos reservados
      </p>
    </footer>
    <!-- Fin Footer -->
  </div>
</template>
