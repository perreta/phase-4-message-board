class ChangeProfilePictureWithDefault < ActiveRecord::Migration[6.1]
  def change
    change_column :users, :profile_picture, :string, :default => "https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg"
  end
end
