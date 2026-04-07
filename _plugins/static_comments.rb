# static_comments.rb - Modified for Jekyll 4.x
# Reads comments from _comments/ directory and attaches to posts

module Jekyll
  class StaticCommentsGenerator < Generator
    safe true
    priority :low

    def generate(site)
      # Only process posts (documents in posts collection)
      posts = site.collections['posts'].docs if site.collections['posts']
      return unless posts

      comments_dir = site.in_source_dir('_comments')
      return unless Dir.exist?(comments_dir)

      # Read all comment files
      comment_files = Dir[File.join(comments_dir, '*.yaml')] + Dir[File.join(comments_dir, '*.yml')]
      
      # Group comments by post_id
      comments_by_post = Hash.new { |h, k| h[k] = [] }

      comment_files.each do |file|
        begin
          data = SafeYAML.load_file(file)
          next unless data && data['post_id']
          # Convert relative URL to absolute if needed
          post_id = data['post_id']
          comments_by_post[post_id] << data
        rescue => e
          Jekyll.logger.warn "StaticComments:", "Error reading #{file}: #{e}"
        end
      end

      # Sort comments by date (if available)
      comments_by_post.each do |post_id, comments|
        comments.sort_by! { |c| c['date'] || '' }
      end

      # Attach to each post
      posts.each do |post|
        post_url = post.url
        # Also try without trailing slash or with variations
        comments = comments_by_post[post_url] || comments_by_post[post_url.chomp('/')]
        post.data['comments'] = comments if comments && !comments.empty?
      end
    end
  end
end
