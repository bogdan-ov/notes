import { motion } from "framer-motion";
import Slide from "./Slide";
import { useEffect } from "react";
import { gsap } from "gsap";
import Icon from "../../../components/ui/Icon";

const TechSlide: React.FC = ()=> {
    useEffect(()=> {

        const timeline = gsap.timeline({ delay: .4 })

        timeline.fromTo(
            ".tech-icon",
            { opacity: 0, left: ()=> innerWidth/2, top: 0 },
            { opacity: 1, left: i=> innerWidth/2 + i * 150 - (4 * 150 / 2) + 50, top: ()=> innerHeight/2-50, ease: "elastic.out(0.6s, 0.4)", duration: 1, stagger: .2 },
        )

        timeline.to(".scaler", {
            scale: 1.2,
            ease: "elastic.out(1, 0.4)",
            direction: .5
        }, 1.2)
        timeline.fromTo(
            ".star", 
            { scale: 0 },
            { scale: 1, ease: "elastic.out(1, 0.4)", duration: .5, stagger: .05 },
            1.1
        )

        timeline.fromTo(
            ".bobble",
            { scale: 0 },
            { scale: 1, rotate: "random(0, 180, 1)", ease: "elastic.out(0.5, 0.4)", duration: .5 },
            1.2
        )

    }, []);
    
    return (
        <Slide>
            <div className="scaler">
                
                <motion.div 
                    initial={{ y: 0, rotate: 0, opacity: 1 }}
                    exit={{ y: 400, rotate: 45, opacity: 1 }}
                    transition={{ ease: "circIn", duration: .4 }}
                    className="tech-icon absolute origin-center ts-icon"
                >
                    <svg className="bobble absolute origin-center" width="116" height="122" viewBox="0 0 116 122" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M108.5 76.5C97.1574 98.5 84 122 48 122C12 122 11.5 102 3.49999 71C-4.50003 40 1.00004 16.5 24.5 6.99999C48 -2.5 85.1574 -1.9572 101 11C116.843 23.9572 119.843 54.5 108.5 76.5Z" fill="#227aff"/>
                    </svg>
                    
                    <motion.svg className="absolute origin-center" width="88" height="88" viewBox="0 0 88 88" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M85.9028 3.21651e-06H2.08992C1.5353 0.000974525 1.00373 0.221976 0.611902 0.614493C0.220072 1.00701 2.37166e-06 1.53897 3.22219e-06 2.09358V85.9064C-0.000479779 86.1815 0.0533426 86.4539 0.158384 86.7082C0.263425 86.9624 0.417618 87.1934 0.612121 87.3879C0.806624 87.5824 1.03761 87.7366 1.29183 87.8416C1.54606 87.9467 1.81851 88.0005 2.09358 88H85.9064C86.1814 88 86.4536 87.9458 86.7076 87.8406C86.9616 87.7354 87.1924 87.5812 87.3868 87.3868C87.5812 87.1924 87.7354 86.9616 87.8406 86.7076C87.9458 86.4536 88 86.1813 88 85.9064V2.08992C87.9995 1.81498 87.9449 1.54284 87.8392 1.28902C87.7336 1.0352 87.579 0.804671 87.3842 0.610605C87.1895 0.416538 86.9584 0.262731 86.7042 0.157963C86.45 0.0531963 86.1777 -0.000478699 85.9028 3.21651e-06ZM52.3798 47.0267H41.9046V79.6147H33.5229V47.0267H23.0477V39.8073H52.3798V47.0267ZM54.7264 77.7521V69.0441C54.7264 69.0441 59.4855 72.63 65.1943 72.63C70.903 72.63 70.6831 68.8975 70.6831 68.3841C70.6831 62.9687 54.5064 62.9687 54.5064 50.9645C54.5064 34.6412 78.0784 41.0833 78.0784 41.0833L77.7851 48.8416C77.7851 48.8416 73.8326 46.2054 69.3668 46.2054C64.901 46.2054 63.2914 48.332 63.2914 50.5979C63.2914 56.4533 79.6147 55.8703 79.6147 67.6545C79.6147 85.8038 54.7264 77.7558 54.7264 77.7558V77.7521Z" fill="white"/>
                    </motion.svg>
                </motion.div>

                <motion.div 
                    initial={{ y: 0, rotate: 0, opacity: 1 }}
                    exit={{ y: 400, rotate: -45, opacity: 1 }}
                    transition={{ ease: "circIn", duration: .4 }}
                    className="tech-icon absolute origin-center react-icon"
                >
                    <svg className="bobble absolute origin-center" width="116" height="122" viewBox="0 0 116 122" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M108.5 76.5C97.1574 98.5 84 122 48 122C12 122 11.5 102 3.49999 71C-4.50003 40 1.00004 16.5 24.5 6.99999C48 -2.5 85.1574 -1.9572 101 11C116.843 23.9572 119.843 54.5 108.5 76.5Z" fill="#19BB57"/>
                    </svg>

                    <motion.svg className="absolute origin-center" width="106" height="94" viewBox="0 0 106 94" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M53 37.7633C58.0781 37.7633 62.2195 41.8685 62.2195 47C62.2195 51.8872 58.0781 56.0413 53 56.0413C47.9219 56.0413 43.7805 51.8872 43.7805 47C43.7805 41.8685 47.9219 37.7633 53 37.7633ZM30.173 86.0973C33.2791 87.9544 40.0828 85.1199 47.9219 77.7891C45.3581 74.9057 42.8437 71.7779 40.4772 68.5035C36.5042 68.1266 32.5544 67.5393 28.6447 66.7441C26.1302 77.2027 27.067 84.3868 30.173 86.0973ZM33.6735 58.045L32.2437 55.5525C31.7014 56.9698 31.1591 58.3871 30.814 59.7555C32.1451 60.0487 33.6242 60.2931 35.1526 60.5374L33.6735 58.045ZM65.9172 54.3307L69.9107 47L65.9172 39.6693C64.4381 37.0791 62.8605 34.7821 61.4307 32.4851C58.7684 32.3385 55.9581 32.3385 53 32.3385C50.0419 32.3385 47.2316 32.3385 44.5693 32.4851C43.1395 34.7821 41.5619 37.0791 40.0828 39.6693L36.0893 47L40.0828 54.3307C41.5619 56.9209 43.1395 59.2179 44.5693 61.5149C47.2316 61.6615 50.0419 61.6615 53 61.6615C55.9581 61.6615 58.7684 61.6615 61.4307 61.5149C62.8605 59.2179 64.4381 56.9209 65.9172 54.3307ZM53 21.489C52.0633 22.5642 51.0772 23.6882 50.0912 25.0078H55.9088C54.9228 23.6882 53.9367 22.5642 53 21.489ZM53 72.511C53.9367 71.4358 54.9228 70.3118 55.9088 68.9922H50.0912C51.0772 70.3118 52.0633 71.4358 53 72.511ZM75.7777 7.9027C72.7209 6.04558 65.9172 8.88013 58.0781 16.2109C60.6419 19.0943 63.1563 22.2221 65.5228 25.4965C69.5656 25.8875 73.5591 26.4739 77.3554 27.2559C79.8698 16.7973 78.933 9.61321 75.7777 7.9027ZM72.3265 35.955L73.7563 38.4475C74.2986 37.0302 74.8409 35.6129 75.186 34.2445C73.8549 33.9513 72.3758 33.7069 70.8474 33.4626L72.3265 35.955ZM79.4754 1.50052C86.7228 5.60574 87.5116 16.4064 84.4549 29.0152C96.9777 32.6806 106 38.7407 106 47C106 55.2593 96.9777 61.3194 84.4549 64.9848C87.5116 77.5936 86.7228 88.3943 79.4754 92.4995C72.2772 96.6047 62.466 91.913 53 82.9695C43.534 91.913 33.7228 96.6047 26.4753 92.4995C19.2772 88.3943 18.4884 77.5936 21.5451 64.9848C9.02233 61.3194 0 55.2593 0 47C0 38.7407 9.02233 32.6806 21.5451 29.0152C18.4884 16.4064 19.2772 5.60574 26.4753 1.50052C33.7228 -2.6047 43.534 2.08698 53 11.0305C62.466 2.08698 72.2772 -2.6047 79.4754 1.50052ZM78.0456 47C79.7219 50.6654 81.2009 54.3307 82.4335 58.045C92.787 54.9661 98.6047 50.5676 98.6047 47C98.6047 43.4324 92.787 39.0339 82.4335 35.955C81.2009 39.6693 79.7219 43.3346 78.0456 47ZM27.9544 47C26.2781 43.3346 24.7991 39.6693 23.5665 35.955C13.213 39.0339 7.39535 43.4324 7.39535 47C7.39535 50.5676 13.213 54.9661 23.5665 58.045C24.7991 54.3307 26.2781 50.6654 27.9544 47ZM72.3265 58.045L70.8474 60.5374C72.3758 60.2931 73.8549 60.0487 75.186 59.7555C74.8409 58.3871 74.2986 56.9698 73.7563 55.5525L72.3265 58.045ZM58.0781 77.7891C65.9172 85.1199 72.7209 87.9544 75.7777 86.0973C78.933 84.3868 79.8698 77.2027 77.3554 66.7441C73.5591 67.5261 69.5656 68.1125 65.5228 68.5035C63.1563 71.7779 60.6419 74.9057 58.0781 77.7891ZM33.6735 35.955L35.1526 33.4626C33.6242 33.7069 32.1451 33.9513 30.814 34.2445C31.1591 35.6129 31.7014 37.0302 32.2437 38.4475L33.6735 35.955ZM47.9219 16.2109C40.0828 8.88013 33.2791 6.04558 30.173 7.9027C27.067 9.61321 26.1302 16.7973 28.6447 27.2559C32.5544 26.4607 36.5042 25.8734 40.4772 25.4965C42.8437 22.2221 45.3581 19.0943 47.9219 16.2109Z" fill="white"/>
                    </motion.svg>
                </motion.div>

                <motion.div 
                    initial={{ y: 0, rotate: 0, opacity: 1 }}
                    exit={{ y: 400, rotate: 90, opacity: 1 }}
                    transition={{ ease: "circIn", duration: .4 }}
                    className="tech-icon absolute origin-center vite-icon"
                >
                    <svg className="bobble absolute origin-center" width="116" height="122" viewBox="0 0 116 122" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M108.5 76.5C97.1574 98.5 84 122 48 122C12 122 11.5 102 3.49999 71C-4.50003 40 1.00004 16.5 24.5 6.99999C48 -2.5 85.1574 -1.9572 101 11C116.843 23.9572 119.843 54.5 108.5 76.5Z" fill="#ffaf1a"/>
                    </svg>
                    
                    <motion.svg className="absolute origin-center" width="88" height="88" viewBox="0 0 88 88" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M30.3295 38.785L32.2069 7.0427C32.2218 6.79432 32.3189 6.55795 32.4828 6.37078C32.6468 6.1836 32.8683 6.05623 33.1125 6.0087L63.6632 0.0210289C63.8519 -0.016024 64.0469 -0.00396549 64.2296 0.0560473C64.4123 0.11606 64.5765 0.222013 64.7064 0.36374C64.8364 0.505467 64.9277 0.678211 64.9717 0.865398C65.0157 1.05259 65.0108 1.24793 64.9576 1.4327L59.2449 21.2437C59.1919 21.4281 59.1871 21.623 59.2309 21.8099C59.2747 21.9967 59.3657 22.1691 59.4952 22.3107C59.6246 22.4524 59.7883 22.5584 59.9704 22.6187C60.1526 22.6791 60.3471 22.6917 60.5356 22.6554L69.2916 20.9687C69.4976 20.9284 69.7108 20.9467 69.9069 21.0216C70.103 21.0964 70.2742 21.2248 70.401 21.3921C70.5279 21.5594 70.6052 21.7589 70.6243 21.968C70.6433 22.177 70.6033 22.3872 70.5089 22.5747L45.6122 72.2581L45.1612 72.9547C45.0642 73.1124 44.9283 73.2425 44.7664 73.3324C44.6046 73.4223 44.4223 73.4691 44.2372 73.4681C43.5882 73.4681 42.9539 72.9107 43.1189 72.1151L47.1339 52.6781C47.1733 52.4877 47.1626 52.2903 47.1027 52.1053C47.0429 51.9203 46.936 51.7541 46.7926 51.6228C46.6491 51.4916 46.474 51.3998 46.2845 51.3566C46.0949 51.3134 45.8974 51.3203 45.7112 51.3764L40.4569 52.9714C40.2709 53.0281 40.0733 53.0354 39.8836 52.9928C39.6938 52.9501 39.5185 52.8588 39.3746 52.7279C39.2308 52.5971 39.1235 52.431 39.0632 52.2462C39.0028 52.0613 38.9916 51.8639 39.0305 51.6734L41.5605 39.2984C41.5989 39.1136 41.59 38.9222 41.5348 38.7417C41.4795 38.5613 41.3797 38.3977 41.2444 38.2661C41.1092 38.1345 40.9429 38.0392 40.761 37.9889C40.5791 37.9386 40.3875 37.935 40.2039 37.9784L31.6972 39.9437C31.5274 39.9827 31.3509 39.9817 31.1816 39.9406C31.0123 39.8996 30.8549 39.8197 30.7218 39.7072C30.5888 39.5948 30.4837 39.453 30.415 39.2929C30.3463 39.1328 30.3158 38.959 30.3259 38.785H30.3295ZM85.2416 9.72303L63.3222 13.7124L61.3276 20.6314L68.9432 19.1647C69.5334 19.0471 70.1455 19.1138 70.6965 19.3558C71.2474 19.5978 71.7106 20.0035 72.0232 20.5177C72.2885 20.9454 72.4394 21.4341 72.4612 21.9369C72.483 22.4397 72.3751 22.9397 72.1479 23.3887L47.2475 73.0757L47.1999 73.1674L47.1449 73.2517L46.6975 73.9484C46.4331 74.3626 46.069 74.7039 45.6385 74.9409C45.208 75.1779 44.725 75.3031 44.2335 75.3051C43.7885 75.3026 43.3495 75.2021 42.9477 75.0107C42.5459 74.8194 42.1912 74.5418 41.9089 74.1977C41.6343 73.8578 41.4391 73.4608 41.3376 73.0358C41.2361 72.6107 41.2308 72.1684 41.3222 71.7411L45.0952 53.4774L40.9885 54.7241C40.4268 54.8933 39.8276 54.8923 39.2664 54.7214C38.7052 54.5504 38.2072 54.2171 37.8352 53.7634C37.5579 53.4247 37.3597 53.0285 37.255 52.6034C37.1503 52.1784 37.1419 51.7354 37.2302 51.3067L39.5402 40.0134L32.1079 41.7294C31.6047 41.8446 31.0802 41.8264 30.5863 41.6766C30.0924 41.5267 29.6462 41.2504 29.2919 40.875C29.0172 40.5813 28.8051 40.2349 28.6683 39.8567C28.5315 39.4785 28.473 39.0765 28.4962 38.6751L29.9225 14.585L2.64252 9.70837C2.22221 9.63252 1.78897 9.67819 1.39372 9.84003C0.998461 10.0019 0.657599 10.2731 0.411174 10.622C0.164748 10.9708 0.0229959 11.3828 0.0025686 11.8094C-0.0178587 12.236 0.0838875 12.6596 0.295855 13.0304L42.4075 86.8661C42.6043 87.2117 42.8893 87.4988 43.2334 87.698C43.5776 87.8973 43.9685 88.0015 44.3662 88C44.7638 87.9985 45.1539 87.8913 45.4966 87.6895C45.8392 87.4877 46.1221 87.1985 46.3162 86.8514L87.6029 13.023C87.8098 12.6516 87.907 12.229 87.883 11.8044C87.8591 11.3799 87.715 10.9709 87.4675 10.6251C87.2201 10.2793 86.8795 10.0109 86.4854 9.85119C86.0913 9.69149 85.6599 9.64704 85.2416 9.72303Z" fill="white"/>
                    </motion.svg>
                </motion.div>

                <motion.div 
                    initial={{ y: 0, rotate: 0, opacity: 1 }}
                    exit={{ y: 400, rotate: -90, opacity: 1 }}
                    transition={{ ease: "circIn", duration: .4 }}
                    className="tech-icon absolute origin-center sass-icon"
                >
                    <svg className="bobble absolute origin-center" width="116" height="122" viewBox="0 0 116 122" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M108.5 76.5C97.1574 98.5 84 122 48 122C12 122 11.5 102 3.49999 71C-4.50003 40 1.00004 16.5 24.5 6.99999C48 -2.5 85.1574 -1.9572 101 11C116.843 23.9572 119.843 54.5 108.5 76.5Z" fill="#dd3d7b"/>
                    </svg>
                    
                    <motion.svg className="absolute origin-center" width="88" height="88" viewBox="0 0 88 88" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M44 0C49.7782 0 55.4997 1.13809 60.8381 3.3493C66.1764 5.56051 71.0269 8.80152 75.1127 12.8873C79.1985 16.9731 82.4395 21.8236 84.6507 27.1619C86.8619 32.5003 88 38.2218 88 44C88 55.6695 83.3643 66.8611 75.1127 75.1127C66.8611 83.3643 55.6695 88 44 88C38.2218 88 32.5003 86.8619 27.1619 84.6507C21.8236 82.4395 16.9731 79.1985 12.8873 75.1127C4.6357 66.8611 0 55.6695 0 44C0 32.3305 4.6357 21.1389 12.8873 12.8873C21.1389 4.6357 32.3305 0 44 0ZM35.2 58.652C35.904 61.028 35.816 63.228 35.2 65.252C35.2 65.472 35.024 65.692 34.936 66C34.848 66 34.76 66.308 34.628 66.528C34.144 67.584 33.44 68.596 32.604 69.476C30.052 72.292 26.4 73.348 24.948 72.468C23.276 71.5 24.2 67.54 27.104 64.416C30.272 61.072 34.848 58.872 34.848 58.872L35.2 58.652ZM71.588 18.832C69.608 11 56.628 8.448 44.396 12.804C37.092 15.4 29.172 19.448 23.496 24.772C16.764 31.108 15.664 36.608 16.104 38.896C17.6 46.992 28.776 52.316 33.352 56.232V56.276C32.032 56.936 22.176 61.908 19.8 67.012C17.424 72.38 20.24 76.252 22 76.78C27.896 78.364 33.836 75.504 37.004 70.708C40.084 66.132 39.864 60.192 38.5 57.2C40.348 56.76 42.504 56.54 45.232 56.848C52.976 57.772 54.472 62.568 54.164 64.592C53.9 66.616 52.272 67.716 51.744 68.068C51.216 68.376 51.04 68.508 51.084 68.772C51.128 69.124 51.392 69.124 51.832 69.036C52.492 68.904 55.924 67.408 56.056 63.668C56.232 58.916 51.7 53.636 43.692 53.768C40.392 53.856 38.324 54.164 36.828 54.736L36.476 54.34C31.504 49.06 22.352 45.32 22.748 38.192C22.88 35.596 23.76 28.82 40.348 20.548C53.9 13.772 64.768 15.62 66.66 19.8C69.344 25.652 60.852 36.608 46.772 38.192C41.404 38.808 38.544 36.696 37.84 35.948C37.092 35.2 37.004 35.068 36.74 35.2C36.256 35.508 36.564 36.212 36.74 36.652C37.136 37.752 38.896 39.6 41.8 40.656C44.396 41.492 50.732 41.976 58.344 39.028C66.88 35.728 73.568 26.532 71.588 18.832Z" fill="white"/>
                    </motion.svg>
                </motion.div>
            
            </div>

            <motion.div 
                initial={{ scale: 1 }}
                exit={{ scale: 0 }}
                transition={{ ease: "circIn", duration: .4 }}
                style={{ left: "20%", top: "20%" }}
                className="particle star text-purple"
            >
                <Icon icon="star" />
            </motion.div>
            <motion.div 
                initial={{ scale: 1 }}
                exit={{ scale: 0 }}
                transition={{ ease: "circIn", duration: .4 }}
                style={{ left: "80%", top: "30%" }}
                className="particle star text-yellow"
            >
                <Icon icon="line-star" />
            </motion.div>
            <motion.div 
                initial={{ scale: 1 }}
                exit={{ scale: 0 }}
                transition={{ ease: "circIn", duration: .4 }}
                style={{ left: "40%", top: "80%" }}
                className="particle star text-green"
            >
                <Icon icon="line-star" />
            </motion.div>
        </Slide>
    );
};

export default TechSlide;