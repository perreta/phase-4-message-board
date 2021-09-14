class Post < ApplicationRecord
  belongs_to :user

  # def date
  #   self.created_at.strftime("%-m-%-d-%Y %I:%M")
  # end
end
