# Ginder

# Basic Features

General the page should be a community for everyone who wants to discuss investment (strategies) with others.

One of the main features are groups. Groups have a kind of topic and users can join groups to discuss a topic.

## Technologies

The app should be build with flutter 2 and if possible already with null safety.
For authentication, database and storage firebase should be used.

## General

### User Information

In posts/messages the user is displayed with his avatar.
Additionally, a batch is displayed for special groups like commercial users.

### Content

Content from users needs to be validated. It is not visible for other users if it is not validated and ok.
Validation could be done with Google SafeSearch:

- https://cloud.google.com/vision/docs/detecting-safe-search
- https://cloud.google.com/video-intelligence/docs/analyze-safesearch

Validations can also be done manually by admins/moderators.
Additionally, users can mark content as inappropriate so that it can be checked by admin/moderator.

## Pages

### Page: Home

On the home page most recent public posts are shown.

### Page: Login / Registration

Loging and registration using firebase

### Page: Dashboard

Here you should see an overview of your account. This might include:

- New posts/messages in own groups
- Private messages

### Page: Groups

- Overview of groups
- Filter groups
+ Category
+ Group Type

Fields/Data: title, description, image, imageCopyright, media (image, videos), messages,
posts, tags, visibility, members, founder

### Page: Group

- Display the group page
- Basic Information about the group
- Messages (messages are only shown to group members)
- Post Message
- Posts (longer text, may have different visibility like public, protected, private)
- Create Group Post
- Create Group Poll
- Create Group Task

#### Page: Group Post

Fields/Data: title, user, date, body, tags, category, media, tags, visibility

### Page: General Pages

General pages with informational purposes, like: FAQ, Tutorials, ...

- List Pages
- Display Page
- Created by admins

### Page: Friends

List own friends and friendship requests

### Page: Messages

List/Create/Delete private messages

### Page: Pricing

The site can be used for free. But commercial usage is not allowed. So all affiliate or commercial links
are not allowed for a basic user.

Commercial Users can buy an abo in order to use one of the features:

- Affiliate/Commercial links in post/messages
- Private Group

#### Pricing - Ads

We will put in some ads for normal users. The user can upgrade to pro in order to remove these

Ads can be bought in packages views/clicks

### Page: Search

If a user searches it should display relevant information from groups / posts

### Page: User Profile

The user profile

- Update own avatar/image
- Current subscription
- Subscription history


### Page: User Posts

A user can also create a post. Visibility will only be public

- List posts
- Posts from a user
- Create post
