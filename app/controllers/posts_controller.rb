class PostsController < ApplicationController

  def index
    @posts = Post.all
  end

  def show
    @post = Post.find
  end

  def new
    @post = Post.new
    @posts = Post.all
  end

  def create
    @post = Post.create(post_params)
    respond_to do |format|
      format.html { redirect_to new_post_path }
      format.json
    end
  end

  def edit
  end

  def update
  end

  def destroy
  end

private
  def post_params
    params.require(:post).permit(:message).merge(user_id: current_user.id)
  end


end
