class ArticlesController < ApplicationController
  def index
    @articles = Article.all
    render json: @articles
  end

  def newest_articles
    @articles = Article.where(newest: true)
    respond_to do |format|
      format.json  { render :json => @articles }
    end
  end

  def top_article
    @article = Article.find_by(id: params[:id])
    respond_to do |format|
      format.json  { render :json => @article }
    end
  end
end
