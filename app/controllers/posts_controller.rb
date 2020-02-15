class PostsController < ApplicationController

  def index
    @posts = Post.all
  end

  def show
    @post = Post.find
  end

  def new
    @post = Post.new
  end

  def create
    Post.create(post_params)
    redirect_to root_path
  end

  def edit
  end

  def update
  end

  def destroy
  end

private
  def post_params
    params.permit(:message)
  end


end
