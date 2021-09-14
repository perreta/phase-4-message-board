class Post < ApplicationRecord
  belongs_to :user
  validates :text, presence: true, length: { in: 6..300 }
end
