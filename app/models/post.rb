class Post < ApplicationRecord
  belongs_to :user
  validates :text, presence: true, length: { in: 1..300 }

  validate :user_posts

  def user_posts
    
  end
end
