class List < ApplicationRecord
  belongs_to :user
  has_many :tasks

  validates :title, :user_id, presence: true
end
