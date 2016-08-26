class User < ApplicationRecord
  has_secure_password

  has_many :lists
  has_many :tasks, { through: :lists }

  validates :username, :email, presence: true
  validates :password, length: { minimum: 6 }
end
