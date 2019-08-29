require 'action_view'

class Cat < ApplicationRecord
  include ActionView::Helpers::DateHelper
  
  COLORS = ["black", "white", "gray", "orange"]

  validates :color, inclusion: COLORS
  validates :sex, inclusion: ["M", "F"]
  validates :birth_date, :name, :color, :sex, :description, presence: true

  def age
    time_ago_in_words(birth_date)
  end
end