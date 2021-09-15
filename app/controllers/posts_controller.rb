class PostsController < ApplicationController
  before_action :find_post, only: [:show, :update, :destroy]
  skip_before_action :authorize, only: :index

  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response



  # GET /posts
  def index
    posts = Post.all
    render json: posts, include: :user, status: :ok
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
    post = find_post
    post.destroy
    head :no_content
  end

  private
    def find_post
      post = @current_user.posts.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def post_params
      params.permit(:text)
    end

    def render_not_found_response(exception) 
      render json: { error: "#{exception.model} not found" }, status: :not_found 
    end

    def render_unprocessable_entity_response(invalid)
      render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
    end
end
