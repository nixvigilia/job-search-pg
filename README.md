# README

When an app on Heroku has only one web dyno, that dyno doesn't receive any traffic in 1 hour, the dyno goes to sleep, and the website will take a moment to load.

# job-search

- install gems and follow instructions
- scaffold Job
- bin/rails action_text:install
- bundle exec rails webpacker:install:stimulus
- bundle exec rails webpacker:install:vue
- initializers/content_security_policy.rb

```ruby
Rails.application.config.content_security_policy do |policy|
    if Rails.env.development?
        policy.script_src :self, :https, :unsafe_eval
    else
        policy.script_src :self, :https
    end
end
```

# job_ui

- yarn add @tailwindcss/typography

```js
// tailwind.config.js
module.exports = {
  theme: {
    // ...
  },
  plugins: [
    require("@tailwindcss/typography"),
    // ...
  ],
};
```

- yarn add ky vue-turbolinks
- yarn add vue-trix
- yarn add vue-pluralize

# Stripe

<!-- new -->

- rails credentials:edit --environment=development

<!-- code -->

- EDITOR="mate --wait" bin/rails credentials:edit --environment=development

- EDITOR="code --wait" bin/rails credentials:edit --environment=development

- yarn add axios
- yarn add vuelidate

- rails g migration add_company_email_to_jobs company_email:string

- gem 'active_storage_base64'

- yarn add @tailwindcss/forms

```js
// tailwind.config.js
module.exports = {
  theme: {
    // ...
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    // ...
  ],
};
```

- yarn add mdi-vue @mdi/js
