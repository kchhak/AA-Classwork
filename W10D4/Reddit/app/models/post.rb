# == Schema Information
#
# Table name: posts
#
#  id         :integer          not null, primary key
#  title      :string           not null
#  url        :string
#  content    :text
#  user_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Post < ApplicationRecord
  validates :title, presence: true

  has_many :post_subs, inverse_of: :post, dependent: :destroy
  has_many :subs,
    through: :post_subs,
    source: :sub

  belongs_to :author,
    class_name: :User,
    foreign_key: :user_id

  has_many :comments
end
