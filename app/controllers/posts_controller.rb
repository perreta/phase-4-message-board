class PostsController < ApplicationController
  before_action :find_post, only: [:show, :update, :destroy]
  # before_action :potato, only: [:destroy]
  skip_before_action :authorize, only: :index


  # GET all users' posts
  def index
    posts = Post.all.sort_by(&:created_at).reverse
    render json: posts,  status: :ok
  end

  # GET /posts/1
  def show
    post = find_post
    render json: post, status: :ok
  end

  # POST /posts
  def create
    post = @current_user.posts.create!(post_params)
    render json: post, status: :created
  end

  # PATCH/PUT /posts/1
  def update
    post = find_post 
    post.update!(post_params)
    render json: post, status: :accepted
  end

  # DELETE /posts/1
  def destroy
    # byebug
      post = @current_user.posts.find(params[:id])
      post.destroy
      head :no_content
  end

  private
    # def potato 
    #   #check if the post belongs to the user, if nil, send not authorized (json with error message), if yes do nothing! @current_user.posts.ids.include?(params[:id])
    # end

    def find_post
      post = @current_user.posts.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def post_params
      params.permit(:text)
    end

end
