import { login } from './actions';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';

export default function LoginPage() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-50">
            <Card className="w-full max-w-md p-6">
                <CardContent>
                    <h2 className="text-2xl font-semibold text-center">CYM LIVING</h2>
                    <form>
                        <div className="mb-4">
                            <Label htmlFor="email">Email</Label>
                            <Input
                                id="email"
                                name="email"
                                type="email"
                                required
                                className="mt-2"
                            />
                        </div>
                        <div className="mb-4">
                            <Label htmlFor="password">Password</Label>
                            <Input
                                id="password"
                                name="password"
                                type="password"
                                required
                                className="mt-2"
                            />
                        </div>
                        <Button type="submit" formAction={login} className="w-full mt-4">
                            Log in
                        </Button>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
}
