class Task < ApplicationRecord
  belongs_to :list

  validates :name, :description, :list_id, :user_id, presence: true
end
