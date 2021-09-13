class User < ApplicationRecord
    has_secure_password

    has_many :posts, dependent: :destroy

    validates :username, presence: true, uniqueness:  :true
    validates :bio, presence: true,  length: {maximum: 100 }
    validates :password, presence: true, length: { minimum: 6, maximum:10 }

end
