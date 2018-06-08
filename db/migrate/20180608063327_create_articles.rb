class CreateArticles < ActiveRecord::Migration[5.2]
  def change
    create_table :articles do |t|
      t.string :title
      t.integer :category_id, index: true
      t.string :short_description
      t.text :content
      t.string :thumbnail_image
      t.text :full_images
      t.string :author
      t.string :source_news
      t.integer :user_id, index: true
      t.boolean :top_article, default: false, index: true
      t.string :slug, uniq: true, index: true
      t.boolean :newest, default: true, index: true
      t.timestamps
    end
  end
end
