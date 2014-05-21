class RedmineJstoolbarExtCoderayHookListener < Redmine::Hook::ViewListener
  render_on :view_layouts_base_html_head, :partial => "redmine_jstoolbar_ext_coderay/redmine_jstoolbar_ext_coderay_partial"
end