import { Button } from "./components/Button/Button";
import { Badge } from "./components/Badge/Badge";
import { Input } from "./components/Input/Input";
import { Avatar, AvatarGroup } from "./components/Avatar/Avatar";
import { Card, CardHeader, CardBody, CardFooter, RestaurantCard } from "./components/Card/Card";
import { Alert } from "./components/Alert/Alert";

function Section({ title, children }) {
  return (
    <section className="mb-12">
      <h2 className="text-display-xs font-semibold text-gray-900 mb-1">{title}</h2>
      <div className="h-px bg-gray-200 mb-6" />
      {children}
    </section>
  );
}

function Row({ label, children }) {
  return (
    <div className="mb-6">
      {label && (
        <p className="text-text-sm font-medium text-gray-500 mb-3">{label}</p>
      )}
      <div className="flex flex-wrap items-center gap-3">{children}</div>
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-8 py-5 sticky top-0 z-10">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <div>
            <h1 className="text-text-xl font-semibold text-gray-900">
              DoorDash Design System
            </h1>
            <p className="text-text-sm text-gray-500">
              Component library — Untitled UI v6.0 tokens
            </p>
          </div>
          <Badge color="green" dot>v0.1.0</Badge>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-8 py-12">

        {/* ── Buttons ─────────────────────────────────────────────── */}
        <Section title="Button">
          <Row label="Variants">
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="tertiary">Tertiary</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="destructive">Destructive</Button>
          </Row>
          <Row label="Sizes (primary)">
            <Button size="sm">Small</Button>
            <Button size="md">Medium</Button>
            <Button size="lg">Large</Button>
            <Button size="xl">X-Large</Button>
            <Button size="2xl">2X-Large</Button>
          </Row>
          <Row label="States">
            <Button loading>Loading</Button>
            <Button disabled>Disabled</Button>
          </Row>
        </Section>

        {/* ── Badges ──────────────────────────────────────────────── */}
        <Section title="Badge">
          <Row label="Colors (md)">
            <Badge color="gray">Gray</Badge>
            <Badge color="brand">Brand</Badge>
            <Badge color="red">Red</Badge>
            <Badge color="orange">Orange</Badge>
            <Badge color="yellow">Yellow</Badge>
            <Badge color="green">Green</Badge>
            <Badge color="blue">Blue</Badge>
            <Badge color="purple">Purple</Badge>
          </Row>
          <Row label="With dot">
            <Badge color="green" dot>Online</Badge>
            <Badge color="gray" dot>Offline</Badge>
            <Badge color="red" dot>Busy</Badge>
            <Badge color="yellow" dot>Away</Badge>
          </Row>
          <Row label="Sizes (brand)">
            <Badge color="brand" size="sm">Small</Badge>
            <Badge color="brand" size="md">Medium</Badge>
            <Badge color="brand" size="lg">Large</Badge>
          </Row>
        </Section>

        {/* ── Inputs ──────────────────────────────────────────────── */}
        <Section title="Input">
          <div className="grid grid-cols-2 gap-6 max-w-2xl">
            <Input label="Email address" placeholder="you@example.com" type="email" hint="We'll never share your email." />
            <Input label="Password" placeholder="••••••••" type="password" />
            <Input label="Search" placeholder="Search restaurants…" />
            <Input label="Delivery address" placeholder="Enter address" error="Address not found. Please try again." />
          </div>
        </Section>

        {/* ── Avatars ─────────────────────────────────────────────── */}
        <Section title="Avatar">
          <Row label="Sizes">
            <Avatar size="xs" name="John Doe" />
            <Avatar size="sm" name="John Doe" />
            <Avatar size="md" name="John Doe" />
            <Avatar size="lg" name="John Doe" />
            <Avatar size="xl" name="John Doe" />
            <Avatar size="2xl" name="John Doe" />
          </Row>
          <Row label="With status">
            <Avatar size="md" name="Alice" status="online" />
            <Avatar size="md" name="Bob" status="away" />
            <Avatar size="md" name="Carol" status="busy" />
            <Avatar size="md" name="Dave" status="offline" />
          </Row>
          <Row label="Avatar group">
            <AvatarGroup
              size="md"
              avatars={[
                { name: "Alice A" },
                { name: "Bob B" },
                { name: "Carol C" },
                { name: "Dave D" },
                { name: "Eve E" },
                { name: "Frank F" },
              ]}
              max={4}
            />
          </Row>
        </Section>

        {/* ── Alerts ──────────────────────────────────────────────── */}
        <Section title="Alert">
          <div className="flex flex-col gap-3 max-w-2xl">
            <Alert variant="info" title="Order confirmed" description="Your order #4821 has been placed and is being prepared." />
            <Alert variant="success" title="Delivery complete" description="Your food was delivered to 123 Main St at 7:32 PM." />
            <Alert variant="warning" title="High demand" description="Delivery times in your area are longer than usual right now." />
            <Alert variant="error" title="Payment failed" description="Your card ending in 4242 was declined. Please update your payment method." onDismiss={() => {}} />
          </div>
        </Section>

        {/* ── Cards ───────────────────────────────────────────────── */}
        <Section title="Card">
          <Row label="Generic card">
            <Card className="w-80">
              <CardHeader>
                <h3 className="text-text-md font-semibold text-gray-900">Order summary</h3>
                <p className="text-text-sm text-gray-500 mt-1">3 items · Est. 30–40 min</p>
              </CardHeader>
              <CardBody>
                <p className="text-text-sm text-gray-600">
                  Spicy Chicken Sandwich × 1<br />
                  Loaded Fries × 2<br />
                  Lemonade × 1
                </p>
              </CardBody>
              <CardFooter>
                <div className="flex justify-between text-text-sm font-medium text-gray-900">
                  <span>Total</span>
                  <span>$28.50</span>
                </div>
              </CardFooter>
            </Card>
          </Row>

          <Row label="Restaurant cards">
            <RestaurantCard
              name="The Burger Joint"
              cuisine="American"
              rating={4.7}
              reviewCount={200}
              deliveryTime="20–30 min"
              deliveryFee="Free delivery"
              promoted
            />
            <RestaurantCard
              name="Sakura Sushi"
              cuisine="Japanese"
              rating={4.9}
              reviewCount={350}
              deliveryTime="35–45 min"
              deliveryFee="$1.99 delivery"
            />
            <RestaurantCard
              name="Pizza Palace"
              cuisine="Italian · Pizza"
              rating={4.5}
              reviewCount={180}
              deliveryTime="25–35 min"
              deliveryFee="Free delivery"
            />
          </Row>
        </Section>

      </main>
    </div>
  );
}
