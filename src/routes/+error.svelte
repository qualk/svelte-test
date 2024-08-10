<script>
   import { page } from "$app/stores";
   import { Button } from "$lib/components/ui/button/index";
   
   let status = $page.status;
</script>

<section class="flex flex-col items-center justify-center h-screen">
      <img 
      src={`https://http.cat/${status}`} 
      alt={`HTTP Cat ${status}`} 
      class="max-w-fit max-h-fit object-cover rounded-lg shadow-lg relative -mt-12"
      />
   <Button variant="outline" class="mt-6" href="/">
      Go back home
   </Button>
</section>
