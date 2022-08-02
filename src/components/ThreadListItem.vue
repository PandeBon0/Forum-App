<!-- <template>
   <div v-for="thread in threads" :key="thread.id" class="thread">
                  <div>
                      <p>
                          <router-link :to="{name:'ThreadShow', params:{id: thread.id}}">{{thread.title}}</router-link>
                      </p>
                      <p class="text-faded text-xsmall">
                          By <a href="#">{{userById(thread.user)}}</a>, {{thread.publishedAt}}.
                      </p>
                  </div>

                  <div class="activity">
                      <p class="replies-count">
                          {{thread.posts.length}} replies
                      </p>

                      <img class="avatar-medium" :src="userById(thread.userId).avatar" alt="">

                      <div>
                          <p class="text-xsmall">
                              <a href="profile.html">{{userById(thread.userId).name}}</a>
                          </p>
                          <p class="text-xsmall text-faded">{{thread.publishedAt}}o</p>
                      </div>
                  </div>
              </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>

</style> 



QUIERO CREAR MI PROPIO COMPONENTE QUE VA A SURGIR A PARTIR DE
THREADLIST Y VA A TOMAR LOS ITEMS DE CADA THREAD LIST PARA QUE THREADLIST 
SOLO TENGA QUE CREAR MULTIPLES INSTANCIAS DEL MISMO OBJETO

EL VIDEO ES CREATE THREAD LIST AND CLEAN UP THE HOMEPAGE
REPASARLO Y VER COMO SE CREA UN COMPONENTE A PARTIR DE OTRO, ES SUPER IMPORTANTE




-->