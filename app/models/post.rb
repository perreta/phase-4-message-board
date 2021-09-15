class Post < ApplicationRecord
  belongs_to :user
  validates :text, presence: true, length: { in: 1..300 }
<<<<<<< HEAD
=======

  validate :user_posts

  def user_posts
    
  end
>>>>>>> 549181924e30178856abe4add8147bb5e0a951c5
end
