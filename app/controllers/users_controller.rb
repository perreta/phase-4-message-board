class UsersController < ApplicationController
    skip_before_action :authorize, only: [:create, :index]

    def index
        users = User.all
        render json: users
    end
    
    def show
        render json: @current_user, status: :accepted
    end

    def create #signup
        # chanign the parameters to a hash, so I can change them
        # Remove :profile_picture if it's empty
        parameters = user_params.to_h
        if parameters[:profile_picture].blank? then 
            parameters.delete(:profile_picture)
        end

        user = User.create!(parameters)
        session[:user_id] = user.id
        render json: user, status: :created 
    end 
    
    def show
        render json: @current_user, status: :accepted 
    end

    def update
        #chanign the parameters to a hash, so I can change them
        #if profile picture is blank, then I replace with the default value by using the User.column_defaults["profile_picture"]
        parameters = user_params.to_h
        if parameters[:profile_picture].blank? then 
            parameters[:profile_picture] = User.column_defaults["profile_picture"]
        end

        @current_user.update!(parameters)
        render json: @current_user, status: :accepted
   
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
