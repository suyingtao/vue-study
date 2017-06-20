<template>
  <article class="article">
    <div id="article_title">{{oneArticle.title}}</div>
    <div>
      <p id="article_content">{{oneArticle.content}}</p>
    </div>
  </article>
</template>

<script>
export default {
  data () {
    return {
      oneArticle: {
        title: 'cs',
        content: 'ceshi'
      }
    }
  }
}
</script>

<style>
@media screen and (max-width: 768px){
  article {
    font-size: 1.6rem;
    padding: 1rem;
  }
  #article_title {
    text-align: center;
  }
}

</style>
