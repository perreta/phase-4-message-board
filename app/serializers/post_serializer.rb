class PostSerializer < ActiveModel::Serializer
  attributes :id, :text, :created_at, :updated_at, :date, :updated_date
  
  belongs_to :user

  def date
    object.created_at.strftime("%b %e,  %l:%M %p")
  end

  def updated_date
    object.updated_at.strftime("%b %e,  %l:%M %p")
  end

end
