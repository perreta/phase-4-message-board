class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :profile_picture, :password_digest
  has_many :posts
end
