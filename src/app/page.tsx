"use client"

import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarStyleMinimal from '@/components/navbar/NavbarStyleMinimal';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import FeatureCardTwo from '@/components/sections/feature/FeatureCardTwo';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import TestimonialCardThree from '@/components/sections/testimonial/TestimonialCardThree';
import FaqBase from '@/components/sections/faq/FaqBase';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import { Award, Bell, ChefHat, Flame, Heart, HelpCircle, Leaf, Pizza, Truck } from "lucide-react";

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="entrance-slide"
      borderRadius="sharp"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleMinimal
          brandName="Tony's Pizza"
          button={{
            text: "Order Now",
            href: "https://orders.tonys-pizza.com"
          }}
        />
      </div>
      
      <div id="hero" data-section="hero">
        <HeroSplit
          title="Authentic Italian Pizza"
          description="Handcrafted with the finest ingredients and baked to perfection in our wood-fired oven. Experience the taste of Italy right in your neighborhood."
          tag="Family Recipe Since 1985"
          tagIcon={Pizza}
          imageSrc="https://images.pexels.com/photos/19260729/pexels-photo-19260729.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Fresh margherita pizza with basil"
          imagePosition="right"
          buttons={[
            {
              text: "Order Online",
              href: "https://orders.tonys-pizza.com"
            },
            {
              text: "View Menu",
              href: "products"
            }
          ]}
        />
      </div>
      
      <div id="features" data-section="features">
        <FeatureCardTwo
          title="What Makes Us Special"
          description="Discover the passion and quality that goes into every pizza we make"
          tag="Our Promise"
          tagIcon={Award}
          features={[
            {
              title: "Fresh Daily Ingredients",
              description: "We source the finest tomatoes, mozzarella, and herbs daily to ensure every bite is bursting with flavor",
              icon: Leaf
            },
            {
              title: "Wood-Fired Perfection",
              description: "Our traditional wood-fired oven reaches 900°F, creating the perfect crispy crust and authentic smoky flavor",
              icon: Flame
            },
            {
              title: "Fast & Hot Delivery",
              description: "Hot, fresh pizza delivered to your door in 30 minutes or less. Satisfaction guaranteed every time",
              icon: Truck
            }
          ]}
        />
      </div>
      
      <div id="products" data-section="products">
        <ProductCardThree
          title="Our Signature Pizzas"
          description="Choose from our delicious selection of handcrafted pizzas"
          tag="Menu Favorites"
          tagIcon={ChefHat}
          products={[
            {
              id: "margherita",
              name: "Classic Margherita",
              price: "$18.99",
              imageSrc: "https://images.pexels.com/photos/8471703/pexels-photo-8471703.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Classic Margherita pizza",
              initialQuantity: 1
            },
            {
              id: "pepperoni",
              name: "Pepperoni Supreme",
              price: "$22.99",
              imageSrc: "https://images.pexels.com/photos/1878346/pexels-photo-1878346.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Pepperoni Supreme pizza",
              initialQuantity: 1
            },
            {
              id: "supreme",
              name: "Tony's Supreme",
              price: "$26.99",
              imageSrc: "https://images.pexels.com/photos/4600696/pexels-photo-4600696.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Tony's Supreme pizza",
              initialQuantity: 1
            }
          ]}
        />
      </div>
      
      <div id="testimonials" data-section="testimonials">
        <TestimonialCardThree
          title="What Our Customers Say"
          description="Real reviews from pizza lovers just like you"
          tag="Customer Love"
          tagIcon={Heart}
          testimonials={[
            {
              id: "1",
              name: "Sarah Johnson",
              handle: "@sarahj_foodie",
              testimonial: "Best pizza in town! The crust is perfectly crispy and the ingredients taste so fresh. Tony's has become our family's weekly tradition.",
              imageSrc: "https://images.pexels.com/photos/7142968/pexels-photo-7142968.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Sarah Johnson"
            },
            {
              id: "2",
              name: "Mike Chen",
              handle: "@mikeeats",
              testimonial: "I've been ordering from Tony's for 3 years and they never disappoint. Fast delivery, hot pizza, and amazing customer service every time.",
              imageSrc: "https://images.pexels.com/photos/7886786/pexels-photo-7886786.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Mike Chen"
            },
            {
              id: "3",
              name: "Emma Rodriguez",
              handle: "@emma_food_lover",
              testimonial: "The wood-fired flavor is incredible! You can really taste the difference. Their margherita pizza reminds me of my trip to Naples.",
              imageSrc: "https://images.pexels.com/photos/6969962/pexels-photo-6969962.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Emma Rodriguez"
            },
            {
              id: "4",
              name: "David Kim",
              handle: "@davidk_reviews",
              testimonial: "Excellent quality and great value. The supreme pizza is loaded with toppings and the cheese pull is absolutely perfect. Highly recommend!",
              imageSrc: "https://images.pexels.com/photos/7680095/pexels-photo-7680095.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "David Kim"
            }
          ]}
        />
      </div>
      
      <div id="faq" data-section="faq">
        <FaqBase
          title="Frequently Asked Questions"
          description="Everything you need to know about ordering from Tony's Pizza"
          tag="Help Center"
          tagIcon={HelpCircle}
          faqs={[
            {
              id: "delivery-time",
              title: "How long does delivery take?",
              content: "We deliver hot, fresh pizza in 30 minutes or less to most locations within our delivery zone. During peak hours (Friday-Sunday evenings), delivery may take up to 45 minutes."
            },
            {
              id: "delivery-area",
              title: "What areas do you deliver to?",
              content: "We deliver within a 5-mile radius of our restaurant. You can check if we deliver to your area by entering your address during checkout on our website."
            },
            {
              id: "payment-methods",
              title: "What payment methods do you accept?",
              content: "We accept cash, all major credit cards (Visa, MasterCard, American Express), and digital payments through our online ordering system."
            },
            {
              id: "special-dietary",
              title: "Do you have options for special dietary needs?",
              content: "Yes! We offer gluten-free crust, vegan cheese, and dairy-free options. Please specify your dietary requirements when ordering, and we'll be happy to accommodate."
            },
            {
              id: "minimum-order",
              title: "Is there a minimum order for delivery?",
              content: "Yes, we have a $15 minimum order requirement for delivery. Pickup orders have no minimum requirement."
            }
          ]}
          animationType="smooth"
        />
      </div>
      
      <div id="contact" data-section="contact">
        <ContactCenter
          tag="Stay Updated"
          title="Get Our Latest Specials"
          description="Subscribe to our newsletter for exclusive deals, new menu items, and special promotions delivered straight to your inbox."
          tagIcon={Bell}
          inputPlaceholder="Enter your email"
          buttonText="Subscribe"
          termsText="We respect your privacy and will never spam you. Unsubscribe anytime."
        />
      </div>
      
      <div id="footer" data-section="footer">
        <FooterLogoEmphasis
          logoText="Tony's Pizza"
          columns={[
            {
              items: [
                {
                  label: "Menu",
                  href: "products"
                },
                {
                  label: "About Us",
                  href: "about"
                },
                {
                  label: "Locations",
                  href: "locations"
                }
              ]
            },
            {
              items: [
                {
                  label: "Order Online",
                  href: "https://orders.tonys-pizza.com"
                },
                {
                  label: "Catering",
                  href: "catering"
                },
                {
                  label: "Gift Cards",
                  href: "gift-cards"
                }
              ]
            },
            {
              items: [
                {
                  label: "Contact",
                  href: "contact"
                },
                {
                  label: "Hours",
                  href: "hours"
                },
                {
                  label: "Reviews",
                  href: "reviews"
                }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}