# encoding: utf-8
require_dependency 'redmine_jstoolbar_ext_coderay'

Redmine::Plugin.register :redmine_jstoolbar_ext_coderay do
  name 'Redmine jsToolbar Coderay Extension'
  author 'Thomas Leishman'
  description 'The Redmine JS Toolbar Coderay Extension adds a CodeRay button and submenu to the jsToolbar.'
  version '0.2.0'
  url 'https://github.com/tleish'
  author_url 'https://github.com/tleish'
  requires_redmine_plugin :redmine_jstoolbar_ext, :version_or_higher => '0.1.0'
end
