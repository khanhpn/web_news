class Article < ApplicationRecord
  attr_accessor :slug
  extend FriendlyId
  friendly_id :title, use: :slugged

  belongs_to :category
end
