<script>
   import { page } from "$app/stores";
   import { Button } from "$lib/components/ui/button/index";
   
   let status = $page.status;
</script>

<section class="flex flex-col items-center justify-center min-h-[calc(100vh-8rem)] pt-4">
   <img 
      src={`https://http.cat/${status}`} 
      alt={`HTTP Cat ${status}`} 
      class="w-full max-w-xs md:max-w-sm lg:max-w-md h-auto object-cover rounded-lg shadow-lg"
   />
   <Button variant="outline" class="mt-6 w-full max-w-xs md:max-w-sm" href="/">
      Go back home
   </Button>
</section>
