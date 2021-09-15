class PostsController < ApplicationController
  before_action :set_post, only: [:show, :update, :destroy]
  skip_before_action :authorize, only: :index

  # GET /posts
  def index
    posts = Post.all
    render json: posts, include: :user
  end

  # GET /posts/1
  def show
    post = Post.find(params[:id])
    render json: post
  end

  # POST /posts
  def create
    post = Post.new(post_params)

    if post.save
      render json: post, status: :created
    else
      render json: post.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /posts/1
  def update
    post = Post.find(params[:id])
    if post.update(post_params)
      render json: post
    else
      render json: @post.errors, status: :unprocessable_entity
    end
  end

  # DELETE /posts/1
  def destroy
    post = Post.find(params[:id])
    post.destroy
    head :no_content
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_post
      post = Post.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def post_params
      params.require(:post).permit(:text, :user_id)
    end
end
