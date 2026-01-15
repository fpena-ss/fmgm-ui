import { Link } from "@tanstack/react-router";
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/outline";
import { useFooterQuery } from "@api/queries/footer.query";
import type { Info, FooterLink, Network, NetworkType } from "@interfaces/footer";
import { InstagramIcon, FacebookIcon, LinkedInIcon, LinkIcon } from "@shared/components/icons/SocialIcons";

const networkIcons: Record<NetworkType, React.FC<{ className?: string }>> = {
    instagram: InstagramIcon,
    facebook: FacebookIcon,
    linkedin: LinkedInIcon,
    other: LinkIcon,
};

const NetworkIcon = ({ network }: { network: Network }) => {
    if (network.icon?.url) {
        return (
            <img
                src={`${import.meta.env.VITE_API_URL}${network.icon.url}`}
                alt={network.text || network.type}
                className="w-6 h-6 object-contain"
            />
        );
    }
    
    const Icon = networkIcons[network.type] ?? LinkIcon;
    return <Icon className="w-6 h-6" />;
};

export const Footer = () => {
    const { data } = useFooterQuery();
    const footer: Info | undefined = data?.data?.info;

    if (!footer) return null;

    return (
        <footer className="bg-fmgm-blue mt-auto">
            <div className="max-w-7xl mx-auto px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {footer.legalInfo && (
                        <div className="space-y-4">
                            <h3 className="text-lg font-semibold text-fmgm-lime">
                                {footer.legalInfo.title}
                            </h3>
                            <ul className="space-y-2">
                                {footer.legalInfo.links?.map((link: FooterLink) => (
                                    <li key={link.id}>
                                        <Link
                                            to={link.url}
                                            className="text-fmgm-green hover:text-fmgm-lime transition-colors text-sm"
                                        >
                                            {link.text}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {footer.contactInfo && (
                        <div className="space-y-4">
                            <h3 className="text-lg font-semibold text-fmgm-lime">
                                {footer.contactInfo.title}
                            </h3>
                            <div className="space-y-3 text-fmgm-green">
                                <a href={`mailto:${footer.contactInfo.email}`} className="flex items-center gap-3 hover:text-fmgm-lime transition-colors">
                                    <EnvelopeIcon className="w-6 h-6 text-fmgm-lime" />
                                    <span>{footer.contactInfo.email}</span>
                                </a>
                                <a href={`tel:${footer.contactInfo.phone}`} className="flex items-center gap-3 hover:text-fmgm-lime transition-colors">
                                    <PhoneIcon className="w-6 h-6 text-fmgm-lime" />
                                    <span>{footer.contactInfo.phone}</span>
                                </a>
                            </div>
                        </div>
                    )}

                    <div className="flex flex-col items-center justify-center gap-6">
                        {footer.icon && footer.icon.length > 0 && (
                            <div className="flex flex-col items-center gap-4">
                                {footer.icon.map((icon, index) => (
                                    <div
                                        key={icon.id}
                                        className={index === 0 ? "w-24 h-24" : "w-12 h-12"}
                                    >
                                        <img
                                            src={`${import.meta.env.VITE_API_URL}${icon.url}`}
                                            alt={icon.alt || 'Icon'}
                                            className="w-full h-full object-contain"
                                        />
                                    </div>
                                ))}
                            </div>
                        )}

                        {footer.networks && footer.networks.length > 0 && (
                            <div className="flex gap-4">
                                {footer.networks.map((network: Network) => (
                                    <a
                                        key={network.id}
                                        href={network.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-10 h-10 rounded-full hover:text-fmgm-lime text-fmgm-green transition-colors flex items-center justify-center"
                                        title={network.text || network.type}
                                    >
                                        <NetworkIcon network={network} />
                                    </a>
                                ))}
                            </div>
                        )}
                    </div>
                </div>

                <div className="mt-10 pt-6 border-t border-fmgm-green/30">
                    <p className="text-center text-fmgm-green text-sm">
                        {footer.copyright}
                    </p>
                </div>
            </div>
        </footer>
    );
}
