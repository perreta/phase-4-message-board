class UsersController < ApplicationController
    skip_before_action :authorize, only: :index

    def index
        users = User.all
        render json: users
    end
    
    def show
        render json: @current_user, status: :accepted
    end

    def create
        user = User.create(user_params)
        session[:user_id] = user.id
        render json: user, status: :created 
    end 
    
    def show
        render json: @current_user, status: :accepted 
    end

    def update
        user = User.find(params[:id])

        user.update!(user_params)
        render json: user, status: :accepted
        # if @user.update(user_params)
        # render json: @user
        # else
        # render json: @user.errors, status: :unprocessable_entity
        # end
    end
      

    # def destroy
    #     user = User.find_by(id: params[:id])
    #     user.destroy
    # end

    private
    # Only allow a list of trusted parameters through.
    def user_params
        params.permit(:username, :password, :profile_picture, :bio)
    end 

    # Use callbacks to share common setup or constraints between actions.
    def set_post
      @user = User.find(params[:id])
    end
end
