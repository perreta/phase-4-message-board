class PostsController < ApplicationController
  before_action :find_post, only: [:show, :update, :destroy]
  skip_before_action :authorize, only: :index

  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response



  # GET /posts
  def index
    posts = Post.all
    render json: posts, status: :ok
  end

  # GET /posts/1
  def show
    post = find_post
    render json: post, status: :ok
  end

  # POST /posts
  def create
    post = Post.create!(post_params)
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
    # Use callbacks to share common setup or constraints between actions.
    def find_post
      post = Post.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def post_params
      params.require(:post).permit(:text, :user_id)
    end

    def render_not_found_response(exception) 
      render json: { error: "#{exception.model} not found" }, status: :not_found 
    end

    def render_unprocessable_entity_response(invalid)
      render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
    end
end
