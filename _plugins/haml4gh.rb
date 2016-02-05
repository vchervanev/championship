module GithubPagesHamlHelper
  # require 'haml'
  # require 'haml/exec'

  # Github Pages don't support Haml plugins, so have to run Html2Haml locally and commit the results
  class Generator < Jekyll::Generator
    def generate(site)

      plugin_config = site.config["haml4gh"]
      source = File.join(site.config["source"], (plugin_config && plugin_config["source"] || "_source"))

      destination = site.config["source"]

      Dir.glob(File.join(source, '*.haml')).each do |source_file|
        destination_file = source_file.sub(source, destination).sub(/\.haml$/, '.html')
        # this will stop current process
        # opts = Haml::Exec::Haml.new([source_file, destination_file])
        # opts.parse!
        p `haml #{source_file} #{destination_file}`
        p "#{source_file} -->> #{destination_file}"
      end

    end
  end
end
