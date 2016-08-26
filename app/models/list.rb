class List < ApplicationRecord
  belongs_to :user
  has_many :tasks

  validates :title, :user_id, presence: true

  def task_names
    self.tasks.pluck(:name)
  end

  def self.ordered_json
    order("title ASC").limit(10).to_json(methods: :task_names)
  end
end
