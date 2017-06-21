<template>
  <article class="article">
    <div id="article_title">
      <h1>
        {{oneArticle.title}}
      </h1>
    </div>
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
        title: '各种剧组撒娇的卡',
        content: 'In 1978, long before the Clybourn Corridor was anointed one of Chicago’s premier shopping destinations, Jay Goltz set up shop in a third-floor walk-up loft in what was then an abandoned factory district. His mission was simple: sell high-quality frames and provide the same personal service as his grandfather and father’s dime store, which was just around the corner on Armitage Avenue.i'
      }
    }
  }
}
</script>

<style>
@media screen and (max-width: 768px){
  article {
    font-size: 1.6rem;
    padding: .8rem;
    background-color: #eee;
    min-height: 1000px;
    margin-top: 15rem;
    padding-top: 1rem;
  }
  #article_title h1{
    text-align: center;
    font-size: 2.6rem;
    line-height: 4rem;
    font-weight: 400;
    padding: 2rem 0 2rem 0;
  }
  #article_content {
    font-size: 1.8rem;
    line-height: 2.4rem;
    font-weight: 200;
  }
}

</style>
