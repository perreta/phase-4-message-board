class Post < ApplicationRecord
  belongs_to :user
  validates :text, presence: true, length: { in: 1..300 }
end
