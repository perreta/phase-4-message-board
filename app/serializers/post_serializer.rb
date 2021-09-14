class PostSerializer < ActiveModel::Serializer
  attributes :text
  
  belongs_to :user


end
